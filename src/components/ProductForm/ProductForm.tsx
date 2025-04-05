'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useProductStore } from '@/shared/store/productStore';

interface ProductFormData {
  name: string;
  price: number;
  image: string;
}

const ProductForm = () => {
  const { register, handleSubmit, reset } = useForm<ProductFormData>();
  //ToDo: create action creator?
  const addProduct = useProductStore((state) => state.addProduct);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: ProductFormData) => {
    addProduct(data);
    reset();
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Добавить товар</button>
      {isOpen && (
        //ToDo: use portal instead of div
        <div className="modal">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} placeholder="Название" />
            <input
              {...register('price', { required: true, valueAsNumber: true })}
              type="number"
              placeholder="Цена"
            />
            <input {...register('image', { required: true })} placeholder="Ссылка на изображение:" />
            <button type="submit">Добавить</button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Отмена
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductForm;
