import request from "@/utlis/request";


export const login = data => {
  console.log(data)
  return request({
    method: 'POST',
    url:'/v1_0/authorizations',
    data
  })
}
