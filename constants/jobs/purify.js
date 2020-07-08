export const unpertJobInput = [
  'id',
  'code',
  'name',
  'expired_at',
  'job_content',
  'welfare',
  'employment_category_id',
  'contract_period',
  'place',
  'work_datetime',
  'salary',
  'industry',
  'info',
  'page'
]

export const sanitizer = (job) => {
  const sanitizedJob = { ...job }
  Object.keys(job).forEach((key) => {
    if (!unpertJobInput.includes(key)) {
      delete sanitizedJob[key]
    }
  })

  const page = { ...sanitizedJob.page }
  sanitizedJob.page = getUpsertPage(page)

  return sanitizedJob
}

export const upsertPage = ['id', 'meta', 'content', 'published_at', 'slug']

function getUpsertPage(page) {
  Object.keys(page).forEach((key) => {
    if (!upsertPage.includes(key)) {
      delete page[key]
    }
  })

  if (!('id' in page)) {
    page.id = ''
  }

  return {
    upsert: page
  }
}
