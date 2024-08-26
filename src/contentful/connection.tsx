import axios from "axios";


export const blogs = async () => {
    const spaceId = process.env.DB_SPACEID;
const accessToken = process.env.DB_ACCESSTOKEN;

const res: any = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=title`);
return res.data
}
