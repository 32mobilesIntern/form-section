import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export async function SelectDemo1() {
    return (
        <Select>
            <SelectTrigger className="lg:w-[180px]">
                <SelectValue className="placeholder:text-[
#343434] placeholder:font-medium placeholder:text-base placeholder:leading-5" placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    );
}

export async function SelectDemo2() {
    return (
        <Select>
            <SelectTrigger className="lg:w-[180px]">
                <SelectValue className="placeholder:text-[
#343434] placeholder:font-medium placeholder:text-base placeholder:leading-5" placeholder="Sorting" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    );
}