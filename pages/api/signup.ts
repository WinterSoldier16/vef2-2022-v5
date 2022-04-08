import { NextApiRequest, NextApiResponse } from "next";

const signup = async (name: string, username: string, password: string) => {

    const userInfo = {
      name: name,
      username: username,
      password: password,
    }
  
    const JSONuserInfo = JSON.stringify(userInfo);
  
    const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/users/register', { 
      method: "post",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSONuserInfo,
    });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {
            name: name,
            username: username,
            password: password,
        } = req.body
        signup(name, username, password);
    }
}
