import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  width: 100%;
  height: 100vh;
`;

export const SidebarLeft = styled.aside`
  height: 100%;
  width: 100%;
  max-width: 20rem;

  background: #f0f0f0;

.gray {
background-color: #AEAEAE;
}

  div.title {
    padding: 0.875rem 1.5rem;
    background-color: #5bafec;
    border: 1px solid #a2a2a2;

    h2 {
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 400;
    }
  }


  ul {
    list-style: none;

    li {
      background-color: #e6e6e6;
      border: 1px solid #e0e0e0;
      padding: 0.875rem 2.5rem;

      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  header {
    background-color: #3899e0;
    border: 1px solid #cecece;

    padding: 2rem 1.5rem;

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.5rem;

      color: #ffffff;
    }
  }
`;

export const View = styled.div`
  background-color: #e6e6e6;
  border: 1px solid #cecece;

  padding: 1rem 1.5rem;

  h3 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;

    margin-bottom: 1rem;
  }

  div {
    display: flex;

    gap: 1rem;

    section {
      padding: 0.625rem 2rem;
      border-radius: 0.5rem;

      display: inline-block;
      justify-items: center;
      align-items: center;

      text-align: center;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 1rem;
      color: #fff;

      width: 100%;

      max-width: 10rem;
    }

    #field_A {
      background-color: #5bafec;
      
    }

    #field_B,
    #field_C {
      background-color: #cecece;
        
    }
  }
`;

export const ColumnInfo = styled.div`
  width: 100%;
  max-width: 20rem;

  .header {
    border: 1px solid #a2a2a2;
    padding: 0.725rem 1.5rem;

    background-color: #5bafec;

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .form {
    border: 1px solid #a2a2a2;
    padding: 1.25rem 1.5rem;

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    form {
      margin-top: 0.5rem;

      input {
        width: 100%;

        text-align: right;

        padding: 0.5rem;
        border: 1px solid #cecece;
      }
    }
  }

  .totalBet {
    border: 1px solid #a2a2a2;
    padding: 2.25rem 1.5rem;

    section {
      margin-bottom: 1.5rem;

      h5 {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;

        margin-bottom: 0.5rem;
      }

      p {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    button {
      width: 100%;

      border-radius: 0.5rem;

      margin: 0px 0.5rem;
      border: none;

      padding: 0.5rem 0.5rem;

      background-color: #5bafec;

      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1rem;

      color: #fff;

      cursor: pointer;
    }
  }
`;
