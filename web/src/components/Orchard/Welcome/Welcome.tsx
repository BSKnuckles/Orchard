import {
  BookOpenIcon,
  AcademicCapIcon,
  LockClosedIcon,
  PhotographIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/outline'
import Logo from 'src/assets/logo/logo_dark.png'

const Welcome = () => {
  return (
    <div className="shadow-md rounded-md">
      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
        <div>
          <img src={Logo} className="block h-12 w-auto" />
        </div>

        <div className="mt-8 text-2xl">
          Welcome to your Orchard application!
        </div>

        <div className="mt-6 text-gray-500">
          Redwood Orchard provides a beautiful, robust starting point for your
          Redwood SaaS application. Redwood is the open source, full-stack web
          framework designed to help you grow from side project to startup.
        </div>
      </div>

      <div className="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
        <div className="p-6">
          <div className="flex items-center">
            <BookOpenIcon className="w-8 h-8 text-gray-400" />
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a href="https://redwoodjs.com/docs">Documentation</a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Redwood has wonderful documentation covering every aspect of the
              framework. Whether you're new to the framework or have previous
              experience, we recommend reading all of the documentation from
              beginning to end.
            </div>

            <a target="_blank" href="https://redwoodjs.com/docs">
              <div className="mt-3 flex items-center text-sm font-semibold text-brand-600">
                <div>Explore the documentation</div>

                <div className="ml-1 text-gray-500">
                  <ArrowSmRightIcon className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
          <div className="flex items-center">
            <AcademicCapIcon className="w-8 h-8 text-gray-400" />
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a href="https://redwoodjs.com/docs/tutorial/foreword">
                Tutorial
              </a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Redwood's Tutorial offers a comprehensive guide to getting started
              with Redwood as a framework. If you have no completed the
              tutorial, it is recommended to start a blank Redwood project and
              run through that once or twice before attempting to use Orchard.
            </div>

            <a
              target="_blank"
              href="https://redwoodjs.com/docs/tutorial/foreword"
            >
              <div className="mt-3 flex items-center text-sm font-semibold text-brand-600">
                <div>Follow the Tutorial</div>

                <div className="ml-1 text-gray-500">
                  <ArrowSmRightIcon className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center">
            <PhotographIcon className="w-8 h-8 text-gray-400" />
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a target="_blank" href="https://tailwindcss.com/">
                Tailwind
              </a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Redwood Orchard is built with Tailwind, an amazing utility first
              CSS framework that doesn't get in your way. You'll be amazed how
              easily you can build and maintain fresh, modern designs with this
              wonderful framework at your fingertips.
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center">
            <LockClosedIcon className="w-8 h-8 text-gray-400" />
            <div className="ml-4 text-lg text-gray-600 leading-7 font-semibold">
              <a target="_blank" href="https://clerk.dev/">
                Clerk
              </a>
            </div>
          </div>

          <div className="ml-12">
            <div className="mt-2 text-sm text-gray-500">
              Clerk is a complete Customer Identity Platform that handles user
              authentication, registration, profile metadata, and team
              management.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
