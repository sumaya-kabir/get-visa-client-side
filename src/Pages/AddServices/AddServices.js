import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Service Added Successfully');
const AddServices = () => {
    useTitle('Add Services');
    const { user } = useContext(AuthContext);

    const handleNewServiceField = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'Unregistered';
        const title = form.serviceName.value;
        const price = form.price.value;
        const picture = form.imageURL.value;
        const description = form.details.value;

        const newService = {
        
            title,
            picture,
            price,
            description
        }

        fetch('http://localhost:5000/newService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                notify()
                form.reset()
            }
        })
        .catch(err => console.error(err))

    }
    
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold '>Add A new service here</h2>
            <form onSubmit={handleNewServiceField} className="w-3/4 mx-auto flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Service Name"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        name="serviceName"
                        placeholder="Education Visa"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Service Image"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        name="imageURL"
                        placeholder='URL Link'
                        type="text"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Service Price (In Dollar)"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        name="price"
                        placeholder='$$$'
                        type="text"
                        required={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Description"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        name="details"
                        placeholder="Write Service Details Here..."
                        required={true}
                        rows={4}
                    />
                </div>

                <Button
                    gradientDuoTone="pinkToOrange"
                    type="submit">
                    Add Service
                </Button>
                <Toaster />
            </form>
        </div>
    );
};

export default AddServices;