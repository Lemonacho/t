  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      axios.post(`/api/checkOnline`, {
        id: adid,
        status: false,
      });
    } else {
      axios.post(`/api/checkOnline`, {
        id: adid,
        status: true,
      });
    }
  });
  window.onunload = function () {
    axios.post(`/api/checkOnline`, {
      id: adid,
      status: false,
    });
  };
  axios.post(`/api/checkOnline`, {
    id: adid,
    status: true,
  });
  
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      axios.post(`/api/checkOnline`, {
        id: adid,
        status: false,
      });
    } else {
      axios.post(`/api/checkOnline`, {
        id: adid,
        status: true,
      });
    }
  });
  