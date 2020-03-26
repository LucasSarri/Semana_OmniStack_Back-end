const connection = require('../database/connection');

module.exports=
{
    async index(req,res)
    {
        const {page=1} = req.query;

        const [count] = await connection('incidents').count();
        const incidents = await connection('incidents').join('users', 'users.id', '=', 'incidents.user_id').limit(5).offset((page-1)*5).select(['incidents.*','user.name','user.email','user.whatsapp','user.city','user.uf']);
    
        res.header('X-Total-Count', count['count(*)']);
        return res.json(incidents);
    },
    async list(req,res)
    {
        const user_id = req.headers.authorization;
        const incidents = await connection('incidents').where('user_id',user_id).select('*');
    
        return res.json(incidents);
    },
    async create(req,res)
    {
        const {title,description,value} = req.body;
        const user_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            user_id
        });

        return res.json({id});
    },
    async delete(req,res)
    {
        const {id} = req.params;
        const user_id = req.headers.authorization;
        const incident = await connection('incidents').where('id',id).select('user_id').first();
         
        if (incident.user_id != user_id)
        {
            return res.status(401).json({error:'Operation not permitted'});
        }

        await connection('incidents').where('id',id).delete();

        return res.status(204).send();
    }
}