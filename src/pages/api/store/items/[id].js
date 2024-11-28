export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      try {
        const response = await fetch(`http://localhost:8080/store/items/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка запроса: ${response.statusText}`);
        }
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Метод ${req.method} не разрешён`);
    }
  }
  