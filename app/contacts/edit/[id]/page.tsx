
import EditFormContact from "@/components/EditFormContact";
import { GetContacts } from "@/lib/getContacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Edit Page",
};

type Contact = {
  id: string;
  name: string;
  email: string;
  userId: string;
};

const ContactEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
   
const {id}= await params
 const contacts = await GetContacts()
  const contact = contacts.find((contact: Contact) => contact.id == id)
  if (!contact) {
    return <div>Contact not found</div>
  }
  return <div className='min-h-[calc(100vh-64px)]  flex flex-col items-center justify-center gap-4 '>
    <h1 className="text-2xl font-semibold">Contact Edit</h1>
    <EditFormContact contact={contact} />

    </div>
}
export default ContactEditPage
