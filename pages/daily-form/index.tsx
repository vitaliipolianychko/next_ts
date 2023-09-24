import React from 'react';

import DailyForm from "../../src/Forms/DailyForm";
import PurchasesList from '../../src/components/PurchasesList'

// containers
import Layout from '../../src/components/Layout'

const DailyFormPage = () => {
    return (
        <div style={{padding: '36px', background: '#E4E4E4', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '36px'}}>
            <DailyForm/>
            <div>
                <PurchasesList/>
            </div>
        </div>
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
