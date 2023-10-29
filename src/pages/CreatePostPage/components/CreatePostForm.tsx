import { Button, Form, Input, Upload } from "antd";
import { toast } from 'react-toastify';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
import { createPost } from "../../../store/reducers/PostsSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/Routes";


export type FieldType = {
    title: string;
    content: string;
};

const { TextArea } = Input;



const CreatePostForm = () => {
    const navigate = useNavigate();


    const [file, setFile] = useState<UploadFile<any>>();

    const onFinishFailed = () => {
        toast("Произошла ошибка");
    };

    const createPostHandler = (values: FieldType) => {
        if (!file) {
            toast('Выберите файл')
            return false
        }
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        if (file instanceof Blob) {
            formData.append("image", file);
        }
        createPost(formData, () => navigate('/' + ROUTES.posts))
    };

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        setFile(info.file);
    };




    return <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={createPostHandler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="Название"
            name="title"
            rules={[{ required: true, message: 'Please input title' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Содержание"
            name="content"
            rules={[{ required: true, message: 'Please input your content' }]}
        >
            <TextArea rows={4} />
        </Form.Item>

        {file?.name
            ? file.name
            :
            <Form.Item name='file'>
                <Upload
                    name="file"
                    listType="picture-card"
                    showUploadList={false}
                    beforeUpload={() => false}
                    onChange={handleChange}
                    fileList={[]}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
        }

        <Form.Item >
            <Button type="primary" htmlType="submit">
                Создать
            </Button>
        </Form.Item>
    </Form>
}

export default CreatePostForm;