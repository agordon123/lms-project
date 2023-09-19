"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";


const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});

const CreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
  });
  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    try {
       const response = await axios.post("/api/courses", values);
        router.push(`/teacher/courses/${response.data.id}`);
        toast.success("Course created");
    } catch (error) {
       toast.error("Something went wrong");
    }
  };

  return (<div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
    <div>
        <h1 className="tezt-2xl">
            Name Your Course
        </h1>
        <p>
            What would you like to name your course? You can change this later.
        </p>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="title" render={({field})=>(
                    <FormItem>
                        <FormLabel>
                            <FormControl>
                                <Input disabled={isSubmitting} placeholder="ex. How to Start a Blog" {...field} />

                            </FormControl>
                            <FormDescription>
                                What will you teach in this course?
                            </FormDescription>
                            <FormMessage />
                        </FormLabel>
                    </FormItem>
                )} />
                <div className="flex items-center gap-x-2">
                    <Link href="/">
                        <Button type="button" variant="ghost">
                            Cancel
                        </Button>
                    </Link>
                    <Button type="submit" disabled={!isValid || isSubmitting}>
                        Continue
                    </Button>

                </div>
            </form>
        </Form>
    </div>
 
    </div>);
};

export default CreatePage;
