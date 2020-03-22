import React from 'react'
import { Button } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';

export const Footer = ({ page, setPage, total, dispatch }) => {
  
    const handleNext = page => {
      dispatch({ type: "LOADING", payload: true });
      setPage(page + 10);
    };

    const handlePreview = page => {
        dispatch({ type: "LOADING", payload: true });
        setPage(page - 10);
      };

    return (
        <div>
          <Button type="primary" icon={<DoubleLeftOutlined />}   disabled={page === 0 } onClick={() => handlePreview(page)}>Anterior</Button> 
          <Button type="primary" icon={<DoubleRightOutlined />} disabled={total <= 10 } onClick={() => handleNext(page)}>Próxima</Button> 
        </div>
    )
}
