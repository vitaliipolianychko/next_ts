import React from 'react';

import DailyForm from "../../src/Forms/DailyForm";

// containers
import Layout from '../../src/components/Layout'
import {useQuery} from "@tanstack/react-query";
import {getPurchase} from "../../src/services/purchase";

const DailyFormPage = () => {

    const { data = {}, isLoading } = useQuery({ queryKey: ['purchase'], queryFn: getPurchase });
    return (
        <React.Fragment>
            <div style={{ padding: '36px', background: '#E4E4E4', borderRadius: '12px' }}>
                <DailyForm/>
            </div>
            <div style={{ marginTop: '16px' }}>
                {isLoading ? <p>Loading ...</p> : (
                    <div>
                        {data.data.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                <p>{item.category}</p>
                                <p>{item.place}</p>
                                <p><b>{item.price}</b></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default DailyFormPage

DailyFormPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
