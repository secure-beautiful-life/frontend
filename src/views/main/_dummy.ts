export const _user = {
  cellList: [
    {
      name: 'user',
      email: '222@gmail.com',
      age: 10,
      role: 'ROLE_USER',
    },
    {
      name: 'manager',
      email: 'onjjj@gmail.com',
      age: 23,
      role: 'ROLE_MANAGER',
    },
  ],
}

export const _hierarchy = {
  headList: [{ role: '권한' }, { parentRole: '부모 권한' }],
  cellList: [
    {
      id: 'a',
      role: 'ROLE_ADMIN',
    },
    {
      id: 'b',
      role: 'ROLE_MANAGER',
    },
    {
      id: 'c',
      role: 'ROLE_USER',
    },
  ],
}

export const _resource = {
  headList: [{ name: '리소스명' }, { type: '리소스타입' }, { httpMethod: 'HttpMethod' }, { order: '순서' }],
  cellList: [
    {
      name: 'name',
      type: 'type',
      httpMethod: 'httpMethod',
      order: 'order',
    },
    {
      name: 'name',
      type: 'type',
      httpMethod: 'httpMethod',
      order: 'order',
    },
  ],
}
