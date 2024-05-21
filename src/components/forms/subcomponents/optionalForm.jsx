"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
    name: z.string().email(),
    age: z.number().min(1, "Age is required").max(120, "Age must be less than 120"),
});

function MandatoryForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    const handleValid = async (field) => {
        if (touchedFields[field]) {
            await trigger(field);
        }
    };
    return (
        <div>
            <div className="flex items-center gap-2">
                <h2 className="text-[#FDB022] font-bold text-xl leading-9">Optional</h2>
                <div className="w-full border border-[#FEF0C7] h-[0.5px]"></div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-[#FFFCF5]">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Sale amount</label>
                            <div className="w-full bg-white">
                                <Select className="px-10" defaultValue="option1">
                                    <SelectTrigger className="w-full">
                                        <span className="text-[#667085] font-normal text-base leading-6">$</span>
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="option1">1,000.00</SelectItem>
                                        <SelectItem value="option2">2,000.00</SelectItem>
                                        <SelectItem value="option3">5,000.00</SelectItem>
                                        <SelectItem value="option4">10,000.00</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[47%] lg:w-[23%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                {...register("name")}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>
                        <div className="w-[95.5%]">
                            <label className="block text-gray-700">Email</label>
                            <RadioGroup defaultValue="option-one">
                                <div className="flex flex-wrap gap-4 bg-white p-4 border border-gray-300 rounded">
                                    <div className="w-[47%] lg:w-[23%]">
                                        <RadioGroupItem value="option-one" id="option-one" />
                                        <Label className="font-medium text-base leading-6 ml-5" htmlFor="option-one">Remember Me</Label>
                                    </div>
                                    <div className="w-[47%] lg:w-[23%]">
                                        <RadioGroupItem value="option-two" id="option-two" />
                                        <Label className="font-medium text-base leading-6 ml-5" htmlFor="option-two">Remember Me</Label>
                                    </div>
                                    <div className="w-[47%] lg:w-[23%]">
                                        <RadioGroupItem value="option-three" id="option-three" />
                                        <Label className="font-medium text-base leading-6 ml-5" htmlFor="option-three">Remember Me</Label>
                                    </div>
                                    <div className="w-[47%] lg:w-[23%]">
                                        <RadioGroupItem value="option-four" id="option-four" />
                                        <Label className="font-medium text-base leading-6 ml-5" htmlFor="option-four">Remember Me</Label>
                                    </div>
                                </div>

                            </RadioGroup>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MandatoryForm;
