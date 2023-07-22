import express from 'express';
const router = express.Router();

router.get('/dummy-request/is-wallet-connected/poisitive', (req, res) => {
    return res.status(200).json({
        data: {
            wallet_connected: true,
            wallet_adress: null
        }
    })
})
router.get('/dummy-request/is-wallet-connected/negitive', (req, res) => {
    return res.status(200).json({
        data: {
            wallet_connected: false,
            wallet_adress: null
        }
    })
})


router.post('/dummy-request/balance-verification/poisitive', (req, res) => {
    return res.status(200).json({
        data: {
            has_sufficient_balance: true
        }
    })
})

router.post('/dummy-request/balance-verification/negitive', (req, res) => {
    return res.status(200).json({
        data: {
            has_sufficient_balance: false
        }
    })
})



router.post('/dummy-request/consume-mblk/poisitive', (req, res) => {
    return res.status(200).json({
        data: {
            was_transaction_sucessful: true
        }
    })
})
router.post('/dummy-request/consume-mblk/negitive', (req, res) => {
    return res.status(200).json({
        data: {
            was_transaction_sucessful: false
        }
    })
})



router.post('/dummy-request/deposit-mblk/poisitive', (req, res) => {
    return res.status(200).json({
        data: {
            was_transaction_sucessful: true
        }
    })
})
router.post('/dummy-request/deposit-mblk/negitive', (req, res) => {
    return res.status(200).json({
        data: {
            was_transaction_sucessful: false
        }
    })
})



export default router;