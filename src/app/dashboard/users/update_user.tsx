import { z } from 'zod';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components/input';
import { useUsers } from '@/hooks/api/auth';
import { useTranslation } from 'react-i18next';

const userSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  username: z.string().nonempty('Username is required'),
  email: z.string().nonempty('Email is required').email('Invalid email address'),
  phone: z.string().nonempty('Phone is required'),
  role: z.string().nonempty('Role is required'),
});

const UpdateUserModal = ({ isOpen, onClose, user, handleRefetch }: any) => {
  const { t } = useTranslation();
  const { updateUser, loading, error } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: user,
  });

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const onSubmit = async (data: any) => {
    try {
      await updateUser(user._id, data);
      onClose();
      handleRefetch();
      reset();
    } catch (err) {}
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" open={isOpen} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-xl my-8 text-black dark:text-white-dark">
                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                  <div className="font-bold text-lg">{t('users.updateUser')}</div>
                </div>
                <div className="p-5">
                  {error && <div className="text-red-500">{error}</div>}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-2">
                      <InputField
                        type="text"
                        label={t('users.firstName')}
                        defaultValue={user?.firstName}
                        placeholder={t('users.enterFirstName')}
                        registration={register('firstName')}
                        error={errors.firstName?.message}
                        name="firstName"
                      />
                      <InputField
                        type="text"
                        label={t('users.lastName')}
                        defaultValue={user?.lastName}
                        placeholder={t('users.enterLastName')}
                        registration={register('lastName')}
                        error={errors.lastName?.message}
                        name="lastName"
                      />
                      <InputField
                        type="text"
                        label={t('users.username')}
                        placeholder={t('users.enterUsername')}
                        defaultValue={user?.username}
                        registration={register('username')}
                        error={errors.username?.message}
                        name="username"
                      />
                      <InputField
                        type="email"
                        label={t('users.email')}
                        defaultValue={user?.email}
                        placeholder={t('users.enterEmail')}
                        registration={register('email')}
                        error={errors.email?.message}
                        name="email"
                      />
                      <InputField
                        type="text"
                        label={t('users.phone')}
                        defaultValue={user?.phone}
                        placeholder={t('users.enterPhone')}
                        registration={register('phone')}
                        error={errors.phone?.message}
                        name="phone"
                      />
                      <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-bold text-gray-700">
                          {t('users.role')}
                        </label>
                        <select
                          id="role"
                          {...register('role')}
                          defaultValue={user?.role}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                        >
                          <option value="">{t('users.selectRole')}</option>
                          <option value="ADMIN">{t('users.roles.admin')}</option>
                          <option value="MANAGER">{t('users.roles.manager')}</option>
                          <option value="CASHIER">{t('users.roles.cashier')}</option>
                        </select>
                        {errors.role && <p className="mt-2 text-sm text-red-600">{t('users.roleRequired')}</p>}
                      </div>
                    </div>
                    <div className="flex justify-end items-center mt-8">
                      <button type="button" onClick={onClose} className="btn btn-outline-danger">
                        {t('common.discard')}
                      </button>
                      <button type="submit" className="btn btn-primary ltr:ml-4 rtl:mr-4" disabled={loading}>
                        {loading ? t('common.saving') : t('common.save')}
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateUserModal;
