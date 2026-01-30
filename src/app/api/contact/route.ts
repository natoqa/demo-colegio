import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Aquí iría la lógica de procesamiento del formulario
    // Por ejemplo: enviar email, guardar en BD, etc.
    
    return NextResponse.json(
      { message: 'Mensaje recibido correctamente' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al procesar el mensaje' },
      { status: 500 }
    );
  }
}
