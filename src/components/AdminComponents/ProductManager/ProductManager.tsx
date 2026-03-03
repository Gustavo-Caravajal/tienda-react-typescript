import React, { useEffect, useState, type ChangeEvent, type SyntheticEvent } from 'react';
import '../../AdminComponents/ManagerLayout.css'
import './ProductManager.css'
import { ModalForm } from '../ModalForm/ModalForm';
import { ProductFormFields } from '../FormFields/ProductFormFields';
import type { CreateProduct, ProductWithRelations } from '../../../types/Product';
import { uploadImage } from '../../../services/uploadImage';
import { deleteProduct, getProducts } from '../../../services/products';
import type { Brand, CreateBrand } from '../../../types/Brand';
import { getBrands } from '../../../services/brands';
import { getCategories } from '../../../services/categories';
import type { Category } from '../../../types/Category';


export const ProductManager = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductWithRelations[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [productImage, setProductImage] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [newProduct, setNewProduct] = useState<CreateProduct>({
        name: "",
        brand_id: null,
        category_id: null,
        price: null,
        description: "",
        imageUrl: "",
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
        let imageUrl: string | null = null;

        if (productImage) {
            imageUrl = await uploadImage(productImage);
        }


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
                action={"Editar"}
                entity="producto"
                handleSubmit={handleSubmit}
                children={
                <ProductFormFields 
                    handleChange={handleChange} 
                    handleFileChange={handleFileChange} 
                    product={newProduct} 
                    brands={brands}  
                    categories={categories}
                />} 
             />

            <div className='page'>
                <div className='page-header'>
                    <h2>Productos</h2>
                    <button
                        onClick={openModal}
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
                            {products.map(prod => (
                                <>
                                    <tr key={prod.id}>
                                        <td>
                                            <div className='product'>
                                                <img className='product-img' src="/images/iphone-15-pro.png" alt="descripcion" />
                                                <div className='product-info'>
                                                    <p>${prod.brand.name} ${prod.name}</p>
                                                    <p>ID #${prod.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            ${prod.brand.name}
                                        </td>
                                        <td>
                                            ${prod.category.name}
                                        </td>
                                        <td>
                                            ${prod.price}
                                        </td>
                                        <td>
                                            ${prod.stock} u
                                        </td>
                                        <td className='actions'>
                                            <div className='div-actions'>
                                                <button onClick={() => {
                                                    openModal();
                                                    setEditingId(prod.id)
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
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}