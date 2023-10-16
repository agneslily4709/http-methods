const api = `https://jsonplaceholder.typicode.com`

export const getPosts =async (req,res) => {
        try{
                const response = await fetch(`${api}/posts`);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}

export const getPostByParams =async (req,res) => {
        const {id} = req.params
        try{
                const response = await fetch(`${api}/posts/${id}`);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}

export const getPostByQuery =async (req,res) => {
        const userId = req.query.userId;
        try{
                const response = await fetch(`${api}/posts?userId=${userId}`);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}

export const postPosts = async (req,res) => {
        const postreq = {method:'POST',  headers:{'Content-Type': 'application/json'},  body:JSON.stringify(req.body)}
        try{
                const response = await fetch(`${api}/posts`,postreq);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
                
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}

export const putPosts = async (req,res) => {
        const {id} = req.params
        const postreq = {method:'PUT',  headers:{'Content-Type': 'application/json'},  body:JSON.stringify(req.body)}
        try{
                const response = await fetch(`${api}/posts/${id}`,postreq);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
                
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}
export const patchPosts = async (req,res) => {
        const {id} = req.params
        const postreq = {method:'PATCH',  headers:{'Content-Type': 'application/json'},  body:JSON.stringify(req.body)}
        try{
                const response = await fetch(`${api}/posts/${id}`,postreq);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
                
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}
export const deletePost = async (req,res) => {
        const {id} = req.params
        const postreq = {method:'DELETE'}
        try{
                const response = await fetch(`${api}/posts/${id}`,postreq);
                if (response.ok) {
                        const data = await response.json();
                        res.status(200).json(data);
                } 
                else {
                        res.status(response.status).json({ error: 'Failed to fetch data' });
                }
                
        } catch (error) {
                res.status(500).json({ error: 'Internal server error' });
        }
}