/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JxVBDJVMCzK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import Search from "@mui/icons-material/Search";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-950">
      <div className="container px-4 md:px-6 py-12 md:py-24 flex flex-col items-center space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover the best content
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Search and explore the latest posts, articles, and resources.
          </p>
        </div>
        <div className="w-full max-w-lg">
          <form className="relative">
            <Input
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 pr-12 text-sm shadow-sm transition-colors focus:border-gray-400 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
              placeholder="Search for anything..."
              type="search"
            />
            <Button
              className="absolute inset-y-0 right-0 grid place-items-center px-4"
              size="icon"
              type="submit"
              variant="ghost"
            >
              <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </form>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="secondary">Articles</Badge>
            <Badge variant="secondary">Tutorials</Badge>
            <Badge variant="secondary">News</Badge>
            <Badge variant="secondary">Design</Badge>
            <Badge variant="secondary">Development</Badge>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-12 md:py-24 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Explore New Posts
              </h2>
              <Link
                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                href="#"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-lg dark:bg-gray-800">
                <Link className="absolute inset-0 z-10" href="/p/1">
                  <span className="sr-only">View post</span>
                </Link>
                <img
                  alt="Post cover"
                  className="h-[250px] w-full object-cover transition-all group-hover:scale-105"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
                    Mastering Responsive Design: Techniques for Fluid Layouts
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-400">
                    Explore the latest techniques and best practices for
                    creating responsive websites that adapt seamlessly to any
                    device.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-lg dark:bg-gray-800">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View post</span>
                </Link>
                <img
                  alt="Post cover"
                  className="h-[250px] w-full object-cover transition-all group-hover:scale-105"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
                    Unleashing the Power of CSS Grid: Layout Mastery
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-400">
                    Discover how to harness the flexibility and power of CSS
                    Grid to create complex and responsive layouts with ease.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-lg dark:bg-gray-800">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View post</span>
                </Link>
                <img
                  alt="Post cover"
                  className="h-[250px] w-full object-cover transition-all group-hover:scale-105"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
                    Accessibility First: Building Inclusive Interfaces
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-400">
                    Learn how to create accessible and inclusive user interfaces
                    that cater to users with diverse needs and abilities.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all hover:shadow-lg dark:bg-gray-800">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View post</span>
                </Link>
                <img
                  alt="Post cover"
                  className="h-[250px] w-full object-cover transition-all group-hover:scale-105"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-tight line-clamp-2">
                    The Future of Web Development: Trends and Innovations
                  </h3>
                  <p className="mt-2 line-clamp-2 text-gray-500 dark:text-gray-400">
                    Explore the latest trends and emerging technologies shaping
                    the future of web development and stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
