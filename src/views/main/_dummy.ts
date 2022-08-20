export const _user = {
  headList: [{ name: '이름' }, { email: '이메일' }, { age: '나이' }, { role: '권한' }],
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
      role: 'ROLE_ADMIN',
      parentRole: '',
    },
    {
      role: 'ROLE_MANAGER',
      parentRole: 'ROLE_ADMIN',
    },
    {
      role: 'ROLE_USER',
      parentRole: 'ROLE_MANAGER',
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
