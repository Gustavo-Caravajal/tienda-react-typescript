import React, { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import './ProductManager.css'
import { ModalForm } from '../ModalForm/ModalForm';
import { ProductFormFields } from '../FormFields/ProductFormFields';
import type { CreateProduct, ProductErrors, ProductWithRelations } from '../../../types/Product';
import { uploadImage } from '../../../services/uploadImage';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../../../services/products';
import type { Brand } from '../../../types/Brand';
import { getBrands } from '../../../services/brands';
import { getCategories } from '../../../services/categories';
import type { Category } from '../../../types/Category';
import { validateProducts } from '../../../utils/validateProduct';



export const ProductManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductWithRelations[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [productImage, setProductImage] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [errors, setErrors] = useState<ProductErrors>({
        name: "",
        brand: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        file: ""
    })
    const [newProduct, setNewProduct] = useState<CreateProduct>({
        name: "",
        brand_id: null,
        category_id: null,
        price: null,
        description: "",
        image_url: "",
        stock: null
    });

    const openModal = (): void => {
        setIsModalOpen(true);
    }

    const closeModal = (): void => {
        setIsModalOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]:
                name === "price" ||
                    name === "stock" ||
                    name === "brand_id" ||
                    name === "category_id"
                    ? value === "" ? null : Number(value)
                    : value
        }))
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files.length > 0) {
            setProductImage(e.target.files[0]);
        }
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setErrors({
            name: "",
            brand: "",
            category: "",
            price: "",
            stock: "",
            description: "",
            file: ""
        });
        const newErrors: ProductErrors = validateProducts(newProduct, productImage);
        const hasErrors: boolean = Object.values(newErrors).some(error => error !== "");
        if (hasErrors) {
            setErrors(newErrors);
            setLoading(false)
            return;
        }

        if (
            newProduct.brand_id === null ||
            newProduct.category_id === null ||
            newProduct.price === null ||
            newProduct.stock === null
        ) {
            alert("Todos los campos son obligatorios.");
            return;
        }
        try {
            let imageUrl: string = newProduct.image_url;

            if (productImage) {
                imageUrl = await uploadImage(productImage);
            }

            const productToCreate = {
                name: newProduct.name,
                brand_id: newProduct.brand_id,
                category_id: newProduct.category_id,
                price: newProduct.price,
                description: newProduct.description,
                image_url: imageUrl,
                stock: newProduct.stock
            }
            if (editingId !== null) {
                await updateProduct(editingId, productToCreate);
            } else {
                await createProduct(productToCreate);
            }
        } catch (error) {
            console.log(error);
        }
        const data = await getProducts();
        setProducts(data);
        setEditingId(null);
        setErrors({
            name: "",
            brand: "",
            category: "",
            price: "",
            stock: "",
            description: "",
            file: ""
        })
        setNewProduct({
            name: "",
            brand_id: null,
            category_id: null,
            price: null,
            description: "",
            image_url: "",
            stock: null
        });
        setIsModalOpen(false);

    }

    const deleteProductById = async (id: number): Promise<void> => {
        try {
            await deleteProduct(id);
            const data = await getProducts()
            setProducts(data);
            setIsModalOpen(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productsdata = await getProducts();
                const brandsData = await getBrands();
                const categoriesData = await getCategories();

                setProducts(productsdata);
                setBrands(brandsData);
                setCategories(categoriesData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [])

    return (
        <section className="manager-container">
            <ModalForm
                isOpen={isModalOpen}
                closeModal={closeModal}
                action={editingId ? "Editar" : "Añadir"}
                entity="producto"
                handleSubmit={handleSubmit}
                children={
                    <ProductFormFields
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                        product={newProduct}
                        brands={brands}
                        categories={categories}
                        errors={errors}
                    />}
            />

            <div className='page'>
                <div className='page-header'>
                    <h4 className='page-header-title' >Productos</h4>
                    <button
                        onClick={() => {
                            openModal();
                            setEditingId(null);
                            setErrors({
                                name: "",
                                brand: "",
                                category: "",
                                price: "",
                                stock: "",
                                description: "",
                                file: ""
                            });
                            setNewProduct({
                                name: "",
                                brand_id: null,
                                category_id: null,
                                price: null,
                                description: "",
                                image_url: "",
                                stock: null
                            });
                            setProductImage(null);
                        }}
                        className='add-btn'>
                        + Añadir producto
                    </button>
                </div>
                <div className='page-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>PRODUCTO</th>
                                <th>MARCA</th>
                                <th>CATEGORIA</th>
                                <th>PRECIO</th>
                                <th>STOCK</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6}>Cargando...</td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan={6}>No hay productos</td>
                                </tr>
                            ) : (<>
                                {products.map(prod => (
                                    <tr key={prod.id}>
                                        <td>
                                            <div className='product'>
                                                <img className='product-img' src={prod.image_url} alt="descripcion" />
                                                <div className='product-info'>
                                                    <p>{prod.brand.name} {prod.name}</p>
                                                    <p>ID #{prod.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {prod.brand.name}
                                        </td>
                                        <td>
                                            {prod.category.name}
                                        </td>
                                        <td>
                                            {prod.price}
                                        </td>
                                        <td>
                                            {prod.stock} u.
                                        </td>
                                        <td className='actions'>
                                            <div className='div-actions'>
                                                <button onClick={() => {
                                                    openModal();
                                                    setEditingId(prod.id);
                                                    setNewProduct({ ...prod });
                                                }}
                                                    className='action-btn'>
                                                    Editar
                                                </button>
                                                <button onClick={() => deleteProductById(prod.id)} className='action-btn delete'>
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}