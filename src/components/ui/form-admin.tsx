"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  password: z.string(),
  showPassword: z.boolean().optional(),
});

function FormAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsFetching(true);

    const { password } = values;

    try {
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full overflow-hidden rounded-lg border-2 border-gray-100 bg-gray-50 text-black shadow-lg"
      >
        <div className="flex w-full items-center justify-center gap-2 bg-gradient-to-b from-red-800 to-red-600 p-5">
          <div className="relative h-7 w-7 rounded-full">
            <Image src={"/logo.png"} alt="Logo" fill />
          </div>
          <h1 className="text-start text-xs font-bold text-white">
            Sistem Presensi Karyawan <br /> Millenium Group
          </h1>
        </div>

        <div className="flex w-full flex-col gap-3 p-5">
          {errorMessage && (
            <div className="rounded-md border-2 border-red-300 bg-red-200 p-5 text-xs font-semibold text-red-500">
              {errorMessage}
            </div>
          )}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="xxxxxxxxxxxx"
                    className="placeholder:text-gray-300"
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="showPassword"
            render={({}) => (
              <FormItem className="mt-10 flex  flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={showPassword}
                    onCheckedChange={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Tampilkan Password</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isFetching}
            className="w-full bg-red-700 hover:bg-red-900 disabled:bg-gray-400 disabled:text-gray-200"
          >
            Masuk
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormAdmin;
