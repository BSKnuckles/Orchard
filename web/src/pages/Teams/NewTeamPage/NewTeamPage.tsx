import { Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useOrganizations } from '@clerk/clerk-react'
import Button from 'src/components/Orchard/Controls/Button/Button'
import TextInput from 'src/components/Orchard/Forms/TextInput/TextInput'

const NewTeamPage = () => {
  const { createOrganization } = useOrganizations()
  const handleSubmit = async ({ name }) => {
    try {
      await createOrganization({ name })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <MetaTags title="New Team" description="New Team page" />

        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  New Team
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  You will be able to invite members to the team once it is created!
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <Form onSubmit={handleSubmit} >
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <TextInput name='name' placeholder='ACME Inc.' label='Team Name' />
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <Button>Create Team</Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
    </>
  )
}

export default NewTeamPage
