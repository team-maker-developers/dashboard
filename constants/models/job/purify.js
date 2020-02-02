export const unpertJobInput = [
  'id',
  'code',
  'name',
  'job_content',
  'employment_category_id',
  'contract_period',
  'place',
  'work_datetime',
  'salary',
  'welfare',
  'industry',
  'info',
  'published_at',
  'expired_at'
]

export const sanitizer = (job) => {
  const sanitizedJob = { ...job }
  Object.keys(job).forEach((key) => {
    if (unpertJobInput.includes(key)) {
      return
    }

    delete sanitizedJob[key]
  })

  return sanitizedJob
}
