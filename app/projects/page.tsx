import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Projects' }

export default function ProjectsPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-bold'>Projects</h1>
      <p className='text-lg'>This is the projects page.</p>
    </div>
  )
}
