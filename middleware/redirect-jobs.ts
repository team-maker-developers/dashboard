import { Context, Middleware } from '@nuxt/types'

const redirectJobs: Middleware = ({ redirect }: Context) => {
  redirect('/jobs')
}

export default redirectJobs
