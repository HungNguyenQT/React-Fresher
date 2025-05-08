import { App, Divider, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import type { FormProps } from 'antd';
import { updateUserAPI } from "@/services/api";


interface IProps {
    openModalUpdate: boolean;
    setOpenModalUpadte: (v: boolean) => void;
    refreshTable: () => void;
    setDataUpdate: (v: IUserTable | null) => void;
    dataUpdate: IUserTable | null
}
type FieldType = {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
};
const UpdateUser = (props: IProps) => {
    const { openModalUpdate, setOpenModalUpadte, refreshTable, setDataUpdate, dataUpdate } = props;
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const { message, notification } = App.useApp();
    const [form] = Form.useForm();
    useEffect(() => {
        if (dataUpdate) {
            form.setFieldsValue({
                _id: dataUpdate._id,
                fullName: dataUpdate.fullName,
                email: dataUpdate.email,
                phone: dataUpdate.phone
            })
        }
    }, [dataUpdate])
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const { _id, fullName, phone } = values;
        setIsSubmit(true)
        const res = await updateUserAPI(_id, fullName, phone);
        if (res && res.data) {
            message.success('Cập nhật user thành công!');
            form.resetFields();
            setOpenModalUpadte(false);
            setDataUpdate(null);
            refreshTable();
        }
        else {
            notification.error({
                message: "Đã có lỗi xảy ra",
                description: res.message
            })
        }
        setIsSubmit(false)
    };
    return (
        <>
            <Modal
                title="Thêm mới người dùng"
                open={openModalUpdate}
                onOk={() => { form.submit() }}
                onCancel={() => {
                    setOpenModalUpadte(false);
                    setDataUpdate(null);
                    form.resetFields();
                }}
                okText={"Cập nhật"}
                cancelText={"Hủy"}
                confirmLoading={isSubmit}
            >
                <Divider />
                <Form
                    form={form}
                    name="basic"
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        hidden
                        labelCol={{ span: 24 }}
                        label="_id"
                        name="_id"
                        rules={[{ required: true, message: 'Vui lòng nhập _id' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        labelCol={{ span: 24 }}
                        label="Tên Hiển Thị"
                        name="fullName"
                        rules={[{ required: true, message: 'Vui lòng nhập tên hiển thị' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        labelCol={{ span: 24 }}
                        label="Số điện thoại"
                        name="phone"
                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )


}

export default UpdateUser;