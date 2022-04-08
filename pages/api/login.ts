import { NextApiRequest, NextApiResponse } from "next";

const login = async (username: string, password: string) => {
  const userInfo= {
    username: username,
    password: password,
  }

  const JSONuserInfo = JSON.stringify(userInfo);

  const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/users/login', { 
    method: "post",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSONuserInfo,
  });

  const { user, token } = await res.json();
  const userName = user.name;

  if (token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedInToken', token);
    localStorage.setItem('loggedInUser', userName);
    }
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      username: username,
      password: password,
    } = req.body
    login(username, password);
  }
}