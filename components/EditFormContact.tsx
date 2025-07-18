import { updateContact } from '@/actions/contact'


const EditFormContact = ({contact}: {contact: {id: string, email: string, name: string, userId: string}}) => {
  return (
    <form action={updateContact} className='w-full max-w-2xl border-2 rounded-lg p-8 gap-4'>
        <input type="hidden" name="id" value={contact.id} />
        <div className='flex flex-col gap-4'>
        <label htmlFor='email'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter  name '
          defaultValue={contact.name}
          required
          className='border border-gray-500 p-2 rounded-lg '
          autoComplete='off'
          autoFocus
        />
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter email'
          defaultValue={contact.email}
          required
          className='border border-gray-500 p-2 rounded-lg '
          autoComplete='off'
          autoFocus
        />
      </div>
      <input type="hidden" name="userId" value={contact.userId} />
      <div className='w-full flex justify-end'>
        <button
          type='submit'
          className='mt-4 bg-green-500 px-6 py-2 rounded-lg  hover:bg-green-500/75'
        >
          Update Contact
        </button>
      </div>
    </form>
  )
}

export default EditFormContact