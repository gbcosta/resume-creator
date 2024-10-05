import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonInput,
  IonTextarea,
  IonText,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButtons,
} from "@ionic/react";

import "./Tab1.css";
import React, {
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { trash } from "ionicons/icons";
import { jsPDF } from "jspdf";

const deleteInput = ({
  inputs,
  setInputs,
  deleteId,
}: {
  inputs: JSX.Element[];
  setInputs: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  deleteId: number;
}) => {
  if (deleteId == -1) return;
  const result = inputs.filter((input) => {
    return Number(input.key) != deleteId;
  });

  setInputs(result);
};

const Input: React.FC<{ label: string; placeholder: string }> = ({
  label,
  placeholder,
}) => {
  return (
    <IonRow>
      <IonCol>
        <IonItem>
          <IonInput
            label={label}
            placeholder={placeholder}
            labelPlacement="floating"
          ></IonInput>
        </IonItem>
      </IonCol>
    </IonRow>
  );
};

const DeleteableInput: React.FC<{
  label: string;
  placeholder: string;
  id: number;
  setDeleteId: React.Dispatch<React.SetStateAction<number>>;
}> = ({ label, placeholder, id, setDeleteId }) => {
  return (
    <IonRow>
      <IonCol>
        <IonItem>
          <IonInput
            label={label}
            placeholder={placeholder}
            labelPlacement="floating"
          ></IonInput>
        </IonItem>
      </IonCol>
      <DeleteButton
        onClick={() => {
          setDeleteId(id);
        }}
      />
    </IonRow>
  );
};

const DeleteButton = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLIonButtonElement | undefined>;
}) => {
  return (
    <IonRow className="ion-justify-content-center">
      <IonButtons>
        <IonButton onClick={onClick} fill="solid" color={"danger"}>
          <IonIcon slot="start" icon={trash}></IonIcon>
        </IonButton>
      </IonButtons>
    </IonRow>
  );
};

const Experiencia: React.FC<{
  id: number;
  setDeleteId: React.Dispatch<React.SetStateAction<number>>;
}> = ({ id, setDeleteId }) => {
  return (
    <IonGrid>
      <IonText>
        <h2 style={{ textAlign: "center" }}>Experiência</h2>
      </IonText>
      <Input placeholder="Empresa" label="Empresa" />
      <Input placeholder="Cargo" label="Cargo" />
      <Input placeholder="Data de inicio" label="Data de Inicio" />
      <Input placeholder="Data de término" label="Data de término" />
      <DeleteButton
        onClick={() => {
          setDeleteId(id);
        }}
      />
    </IonGrid>
  );
};

const Experiencias: React.FC = () => {
  const [deleteId, setDeleteId] = useState(-1);
  const [inputs, setInputs] = useState([
    <Experiencia id={1} setDeleteId={setDeleteId} key={1} />,
  ]);

  useEffect(() => {
    deleteInput({ inputs, setInputs, deleteId });
  }, [deleteId]);

  return (
    <IonItem>
      <IonGrid>
        {inputs}
        <IonRow className="ion-justify-content-center">
          <IonButton
            color={"success"}
            onClick={() => {
              const key = Math.random() * 100000;
              const newInputs = [...inputs];
              newInputs.push(
                <Experiencia key={key} id={key} setDeleteId={setDeleteId} />,
              );
              setInputs(newInputs);
            }}
            expand="block"
          >
            +
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

const Competencias: React.FC = () => {
  const [deleteId, setDeleteId] = useState(-1);
  const [inputs, setInputs] = useState([
    <DeleteableInput
      placeholder="Competência"
      label="Competência"
      id={1}
      setDeleteId={setDeleteId}
      key={1}
    />,
  ]);

  useEffect(() => {
    deleteInput({ inputs, setInputs, deleteId });
  }, [deleteId]);

  return (
    <IonItem>
      <IonGrid>
        {inputs}
        <IonRow className="ion-justify-content-center">
          <IonButton
            color={"success"}
            onClick={() => {
              const key = Math.random() * 100000;
              const newInputs = [...inputs];
              newInputs.push(
                <DeleteableInput
                  key={key}
                  id={key}
                  setDeleteId={setDeleteId}
                  placeholder="Competência"
                  label="Competência"
                />,
              );
              setInputs(newInputs);
            }}
            expand="block"
          >
            +
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

const Linguas: React.FC = () => {
  const [deleteId, setDeleteId] = useState(-1);
  const [inputs, setInputs] = useState([
    <DeleteableInput
      placeholder="Língua"
      label="Língua"
      id={1}
      setDeleteId={setDeleteId}
      key={1}
    />,
  ]);

  useEffect(() => {
    deleteInput({ inputs, setInputs, deleteId });
  }, [deleteId]);

  return (
    <IonItem>
      <IonGrid>
        {inputs}
        <IonRow className="ion-justify-content-center">
          <IonButton
            color={"success"}
            onClick={() => {
              const key = Math.random() * 100000;
              const newInputs = [...inputs];
              newInputs.push(
                <DeleteableInput
                  key={key}
                  id={key}
                  setDeleteId={setDeleteId}
                  placeholder="Língua"
                  label="Língua"
                />,
              );
              setInputs(newInputs);
            }}
            expand="block"
          >
            +
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

const Formacao: React.FC<{
  id: number;
  setDeleteId: React.Dispatch<React.SetStateAction<number>>;
}> = ({ id, setDeleteId }) => {
  return (
    <IonGrid>
      <IonText>
        <h2 style={{ textAlign: "center" }}>Formação</h2>
      </IonText>
      <Input placeholder="Instituição" label="Instituição" />
      <Input placeholder="Curso" label="Curso" />
      <Input placeholder="Data de inicio" label="Data de Inicio" />
      <Input placeholder="Data de término" label="Data de término" />
      <DeleteButton
        onClick={() => {
          setDeleteId(id);
        }}
      />
    </IonGrid>
  );
};

const Formacoes: React.FC = () => {
  const [deleteId, setDeleteId] = useState(-1);
  const [inputs, setInputs] = useState([
    <Formacao key={1} id={1} setDeleteId={setDeleteId} />,
  ]);

  useEffect(() => {
    deleteInput({ inputs, setInputs, deleteId });
  }, [deleteId]);

  return (
    <IonItem>
      <IonGrid>
        {inputs}
        <IonRow className="ion-justify-content-center">
          <IonButton
            color={"success"}
            onClick={() => {
              const key = Math.random() * 100000;
              const newInputs = [...inputs];
              newInputs.push(
                <Formacao key={key} id={key} setDeleteId={setDeleteId} />,
              );
              setInputs(newInputs);
            }}
            expand="block"
          >
            +
          </IonButton>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

const Tab1: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const formObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      console.log(value);
      formObject[key] = value.toString();
    });

    console.log(formObject);

    const doc = new jsPDF();
    const resume = Object.entries(formObject)
      .map(([key, value]) => `${value}`)
      .join("\n");
    doc.text(resume, 10, 10);
    doc.save("curriculo");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gerador de currículo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <form method="POST" onSubmit={handleSubmit}>
            <IonText>
              <h1 style={{ textAlign: "center" }}>Dados Pessoais</h1>
            </IonText>
            <IonItem>
              <IonGrid>
                <Input label="Nome" placeholder="Nome" />
                <Input label="Sobrenome" placeholder="Sobrenome" />
                <Input
                  label="Data de nascimento"
                  placeholder="Data de nascimento"
                />
                <Input
                  label="Telefone celular"
                  placeholder="Telefone celular"
                />
                <Input label="Email" placeholder="Email" />
                <Input
                  label="Link para site pessoal"
                  placeholder="Link para site pessoal"
                />
              </IonGrid>
            </IonItem>

            <IonText>
              <h1 style={{ textAlign: "center" }}>Resumo Profissional</h1>
            </IonText>
            <IonItem>
              <IonTextarea label="" placeholder="" labelPlacement="floating" />
            </IonItem>

            <IonText>
              <h1 style={{ textAlign: "center" }}>Objetivos Profissionais</h1>
            </IonText>
            <IonItem>
              <IonTextarea label="" placeholder="" labelPlacement="floating" />
            </IonItem>

            <IonText>
              <h1 style={{ textAlign: "center" }}>Experiência Profissional</h1>
            </IonText>
            <Experiencias />

            <IonText>
              <h1 style={{ textAlign: "center" }}>Formação Acadêmica</h1>
            </IonText>
            <Formacoes />

            <IonText>
              <h1 style={{ textAlign: "center" }}>Competências</h1>
            </IonText>
            <Competencias />

            <IonText>
              <h1 style={{ textAlign: "center" }}>Linguas</h1>
            </IonText>
            <Linguas />

            <IonButton type="submit" fill="solid" expand="full">
              Submit
            </IonButton>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
