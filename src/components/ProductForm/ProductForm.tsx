'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ProductFormData } from '@/components/ProductForm/types';
import Button from '@/shared/components/Button';
import Portal from '@/shared/components/Portal';
import { useProductStore } from '@/shared/store/productStore';

interface IProductFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ProductForm: FC<IProductFormProps> = ({ setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm<ProductFormData>();
  //ToDo: create action creator?
  const addProduct = useProductStore((state) => state.addProduct);

  const onSubmit = (data: ProductFormData) => {
    addProduct(data);
    reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Portal>
      <div className="modal">
        <Button variant="close" onClick={handleClose}>
          X
        </Button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('name', { required: true })} placeholder="Название" />
          <input
            {...register('price', { required: true, valueAsNumber: true })}
            type="number"
            placeholder="Цена"
          />
          <input {...register('image', { required: true })} placeholder="Ссылка на изображение:" />
          <Button type="submit">Добавить</Button>
          <Button type="button" onClick={handleClose}>
            Отмена
          </Button>
        </form>
      </div>
    </Portal>
  );
};

export default ProductForm;
