import request from '@/api/request'

const getPageById = (id) => {
  return request({
    url: `/pages/${id}`,
    method: 'GET',
  })
}

const getPageByUrl = (url) => {
  return request({
    url: `/pages/${url}`,
    method: 'GET',
  })
}

const getPageContentById = (url) => {
  return getPageByUrl(url)
    .then((response) => {
      const content = response.data.content
      return content
    })
}

const getPageContentByUrl = (url) => {
  return getPageById(url)
    .then((response) => {
      const content = response.data.content
      return content
    })
}

const PagesApi = {
  getPageById,
  getPageByUrl,
  getPageContentById,
  getPageContentByUrl,
}

export default PagesApi
