# Student Marks Analyzer (Web App)

A beginner-friendly Python web app that calculates **total marks**, **average**, and assigns a **grade** based on 5 subject marks.

## Features

- Input marks for 5 subjects
- Automatic total and average calculation
- Grade classification:
  - `>= 75` → Distinction
  - `>= 60` → First Class
  - `>= 40` → Pass
  - `< 40` → Fail
- Clean UI built with Streamlit

## Tech Stack

- Python
- Streamlit

## Run Locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
streamlit run app.py
```

## Project Structure

```text
.
├── app.py
├── requirements.txt
└── README.md
```

## Deploy to GitHub + Streamlit Community Cloud

1. Create a GitHub repository.
2. Push this code.
3. Open [Streamlit Community Cloud](https://streamlit.io/cloud).
4. Connect your GitHub repo and deploy `app.py`.

---

Built for portfolio demonstration of Python basics: `input handling`, `lists`, `loops`, and `conditional logic`.
