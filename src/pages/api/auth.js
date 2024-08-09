export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Dummy authentication logic
      if (email === 'user@example.com' && password === 'password') {
        return res.status(200).json({ user: { email, name: 'John Doe' }, token: 'dummy-token' });
      }
  
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  