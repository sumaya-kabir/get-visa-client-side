import { Button, Card, Checkbox, Label, Select, TextInput } from 'flowbite-react';
import React from 'react';

const CallToAction = () => {
    return (
        <div className="flex gap-8 justify-around bg-orange-300 p-10 my-12">
            <img src="https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <form className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Request an Appointment</h2>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Full Name"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="text"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="name@getvisa.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="countries"
                            value="Select your country"
                        />
                    </div>
                    <Select
                        id="countries"
                        required={true}
                    >
                        <option>
                            United States
                        </option>
                        <option>
                            Canada
                        </option>
                        <option>
                            France
                        </option>
                        <option>
                            Germany
                        </option>
                    </Select>
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>

                <Button type="submit">
                    Send Request
                </Button>
            </form>
        </div>
    );
};

export default CallToAction;