
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Edit Page",
};

const ContactEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
   
const {id}= await params
  return <div>
    <h1>Contact Edit {id}</h1>
    
    </div>
}
export default ContactEditPage
