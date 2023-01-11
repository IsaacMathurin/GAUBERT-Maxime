  if (Object.keys(errors).length) {
    res.status(422).json(errors);
    return;
  }

  Playlist.push(Playlist);
  const { name_music, ...result } = Playlist;

  res.status(201).json(result);
});

router.get("/Playlist/:id", (req, res) => {
  const Playlist = Playlist.find((u) => u.id === req.params.id);
  if (!Playlist) {
    res.sendStatus(404);
  } else {
    const { Name_Playlist, ...result } = Playlist;
  }
});

router.put("/Playlist/:id", (req, res) => {
  const PlaylistInput = req.body;
  const errors = {};

  if (PlaylistInput.name_music && PlaylistInput.name_music !== "") {
    errors.name_music = "must not be empty";
  }

  if (PlaylistInput.Name_playlist && PlaylistInput.Name_playlist !== "") {
    errors.Name_playlist = "must not be empty";
  }

  if (Object.keys(errors).length) {
    res.status(422).json(errors);
    return;
  }
  const Playlist = Playlist.find((u) => u.id === req.params.id);
  if (!Playlist) {
    res.sendStatus(404);
  } else {
    Playlist = Playlist.map((u) =>
      u.id === req.params.id
        ? {
            ...u,
            ...PlaylistInput,
          }
        : u
    );
    const Playlist = Playlist.find((u) => u.id === Playlist.id);
    res.json(result);
  }
});

router.delete("/Playlist/:id", (req, res) => {
  const Playlist = Playlist.findIndex((u) => u.id === req.params.id);
  if (PlaylistIndex === -1) {
    res.sendStatus(404);
  } else {
    Playlist.splice(PlaylistIndex, 1);
    res.sendStatus(204);
  }
});

module.exports = router;
