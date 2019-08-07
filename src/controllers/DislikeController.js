const DevModel = require('../models/Dev')

module.exports = {
  async store (req, res) {
    const { user } = req.headers
    const { id } = req.params

    const loggedDev = await DevModel.findById(user)
    const targetDev = await DevModel.findById(id)

    if (!targetDev) return res.status(400).json({ error: 'Dev not exists' })

    loggedDev.dislikes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}