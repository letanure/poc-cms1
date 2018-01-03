import request from '@/api/request'

const getPage = (url) => {
  return request({
    url: `/pages/${url}`,
    method: 'GET',
  })
}

const getPageContent = (url) => {
  return getPage(url)
    .then((response) => {
      const content = response.data.content
      return content
    })
}

const PagesApi = {
  getPage,
  getPageContent,
}

export default PagesApi
