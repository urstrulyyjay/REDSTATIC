import streamlit as st


def calculate_grade(average: float) -> str:
    if average >= 75:
        return "Distinction"
    if average >= 60:
        return "First Class"
    if average >= 40:
        return "Pass"
    return "Fail"


st.set_page_config(page_title="Student Marks Analyzer", page_icon="📊", layout="centered")
st.title("📊 Student Marks Analyzer")
st.caption("Enter marks for 5 subjects and get total, average, and grade.")

marks = []
for i in range(1, 6):
    mark = st.number_input(
        f"Subject {i} marks",
        min_value=0.0,
        max_value=100.0,
        value=0.0,
        step=1.0,
        key=f"subject_{i}",
    )
    marks.append(mark)

if st.button("Analyze", type="primary"):
    total = sum(marks)
    average = total / len(marks)
    grade = calculate_grade(average)

    st.subheader("Result")
    st.write(f"**Marks:** {', '.join(str(int(m)) if m.is_integer() else str(m) for m in marks)}")
    st.write(f"**Total:** {total:.2f}")
    st.write(f"**Average:** {average:.2f}")

    if grade == "Distinction":
        st.success(f"Grade: {grade}")
    elif grade == "First Class":
        st.info(f"Grade: {grade}")
    elif grade == "Pass":
        st.warning(f"Grade: {grade}")
    else:
        st.error(f"Grade: {grade}")

st.markdown("---")
st.markdown(
    """
### Grade Rules
- **Average >= 75** → Distinction
- **Average >= 60** → First Class
- **Average >= 40** → Pass
- **Average < 40** → Fail
"""
)
