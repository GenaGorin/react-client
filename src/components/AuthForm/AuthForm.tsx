import { Button, Form, Input } from "antd";
import { toast } from 'react-toastify';


export type LoginType = {
    email: string;
    password: string;
};

type AuthFormType = {
    successCallback: (values: LoginType) => void,
    buttonText: string;
}

const AuthForm = ({ successCallback, buttonText }: AuthFormType) => {


    const onFinishFailed = () => {
        toast("Произошла ошибка");
    };

    return <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={successCallback}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<LoginType>
            label="Username"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }, { type: 'email' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<LoginType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit">
                {buttonText}
            </Button>
        </Form.Item>
    </Form>
}

export default AuthForm;