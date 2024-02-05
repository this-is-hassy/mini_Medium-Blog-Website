import axios from "axios";

const spaceId = 'g0dtyugdzikr';
const accessToken = '4exC81qpVKERmMnXhlakmfxEW9IlEsbQ6lXe7i_Srhg';

export const blogs = async () => {

const res: any = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=title`);
return res.data
}
