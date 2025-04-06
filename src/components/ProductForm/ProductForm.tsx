'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from './ProductForm.module.scss';
import { ProductFormData } from '@/components/ProductForm/types';
import Button from '@/shared/components/Button';
import Portal from '@/shared/components/Portal';
import { useProductStore } from '@/shared/store/productStore';

interface IProductFormProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ProductForm: FC<IProductFormProps> = ({ setIsOpen }) => {
  // Get the addProduct action from the Zustand store
  const addProduct = useProductStore((state) => state.addProduct);

  // Initialize react-hook-form with type-safe form handling
  const { register, handleSubmit, reset } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    // Add the new product to the store (and localStorage via the store)
    addProduct(data);
    // Reset the form fields after submission
    reset();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Portal>
      <div className={styles.modalBackdrop}>
        <div className={styles.modal}>
          <Button variant="close" onClick={handleClose}>
            X
          </Button>

          <form className={styles.modalForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.modalFormControls}>
              <input {...register('name', { required: true })} placeholder="Название" />
              <input
                {...register('price', { required: true, valueAsNumber: true })}
                type="number"
                placeholder="Цена"
              />
              <input {...register('image', { required: false })} placeholder="Ссылка на изображение:" />
            </div>

            <div className={styles.modalFormActions}>
              <Button type="button" onClick={handleClose} w100>
                Отмена
              </Button>
              <Button type="submit" w100>
                Добавить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Portal>
  );
};

export default ProductForm;
