import { Context, Middleware } from '@nuxt/types' // eslint-disable-line no-unused-vars

const redirectJobs: Middleware = ({ redirect }: Context) => {
  redirect('/jobs')
}

export default redirectJobs
