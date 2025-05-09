"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Check, FolderPlus, Pen, Pencil, Plus, PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import TextInput from "@/components/FormInput/TextInput";
import SubmitButton from "@/components/FormInput/SubmitButton";
import { Button } from "@/components/ui/button";
 

export type StreamProps={
    name: string
} 
export default function StreamForm({
  userId,
  initialContent,
  editingId,
}: {
  userId?: string;
  initialContent?: string;
  editingId?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StreamProps>({
    defaultValues: {
      name: initialContent || "",
    },
  });
 
  const [loading, setLoading] = useState(false);
 
  async function saveStream(data: StreamProps) {
    // data.userId = userId;
    try {
      setLoading(true);
      if (editingId) {
        // await updateClassById(editingId, data);
        // setLoading(false);
        // toast.success("Updated Successfully!");
      } else {
        // await createClass(data);
        // setLoading(false);
        // toast.success("Successfully Created!");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
 
  return (
    <div>
      <div className="py-1">
        <Dialog>
          <DialogTrigger asChild>
            {editingId ? (
              <button title="Edit Folder" className="text-blue-600">
                <Pencil className="w-4 h-4 " />
              </button>
            ) : (
                <div className="p-4 border-b flex items-center justify-between">
                {/* <h2 className="text-xl font-bold">Stream</h2> */}
                <Button variant="outline" size="sm" className="flex items-center gap-1" title="Add New Stream">
                  <PlusCircle className="h-4 w-4" />
                  <span>Add Stream</span>
                </Button>
              </div>
            )}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Stream" : "Add New Stream"}
              </DialogTitle>
              {/* <DialogDescription>
                Please Write your Comment here, with respect
              </DialogDescription> */}
            </DialogHeader>
            <form className="" onSubmit={handleSubmit(saveStream)}>
              <div className="">
                <div className="space-y-3">
                  <div className="grid gap-3">
                    <TextInput
                      register={register}
                      errors={errors}
                      label=""
                      name="name"
                      icon={Check}
                    />
                    {/* <IconInput
                      onIconSelect={setSelectedIcon}
                      selectedIcon={selectedIcon}
                    /> */}
                  </div>
                </div>
                <div className="py-3">
                  <SubmitButton
                    title={editingId ? "Update" : "Add"}
                    loading={loading}
                  />
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
