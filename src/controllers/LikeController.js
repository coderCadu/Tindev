// Index, show, store, update, delete
const DevModel = require('../models/Dev')

module.exports = {
  async store(req, res) {
    const { id } = req.params
    const { user } = req.headers

    const loggedDev = await DevModel.findById(user)
    const targetDev = await DevModel.findById(id)

    if (!targetDev) return res.status(400).json({ error: 'Dev not exists' })

    if (targetDev.likes.includes(user)) console.log('DEU MATCH')

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}
