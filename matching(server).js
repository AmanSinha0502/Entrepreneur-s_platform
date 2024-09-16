// Matching Algorithm (server.js)

app.get('/match/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await Entrepreneur.findById(id);

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Find users where their "offering" matches the current user's "asking"
    const matches = await Entrepreneur.find({
      offering: user.asking,
      _id: { $ne: id } // Exclude the current user from the results
    });

    res.status(200).send(matches);
  } catch (error) {
    res.status(500).send({ message: 'Error finding matches', error });
  }
});
